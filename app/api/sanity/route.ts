import { NextResponse } from 'next/server';

export async function POST(request: any) {  
  const body = await request.json();

  const token = process.env.SANITY_WRITE_TOKEN; // Assicurati di averlo configurato nel file .env
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // Modifica in base al dataset che usi
  const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // Sostituisci con il tuo project ID
  const url = `https://${sanityProjectId}.api.sanity.io/v2021-10-21/data/mutate/${sanityDataset}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          create: {
            _type: 'memo', // Specifica lo schema che vuoi usare
            ...body, // Passa i dati ricevuti dal frontend
          },
        },
      ],
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: 'Errore nella creazione del documento' }, { status: 500 });
  }

  return NextResponse.json({ result });
}