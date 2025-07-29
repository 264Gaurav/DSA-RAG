import * as dotenv from 'dotenv';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';



dotenv.config();

const CHUNK_SIZE = 1000; // Size of each chunk
const CHUNK_OVERLAP = 200; // Overlap between chunks


// Load the PDF file
const PDF_PATH = './assets/dsa.pdf';
const pdfLoader = new PDFLoader(PDF_PATH);
const rawDocs = await pdfLoader.load();
//console.log(rawDocs.length)



// Create the chunk of the PDF
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: CHUNK_SIZE,
  chunkOverlap: CHUNK_OVERLAP,
});

const chunkedDocs = await textSplitter.splitDocuments(rawDocs);
//console.log(JSON.stringify(chunkedDocs.slice(0, 2), null, 2));
//console.log(chunkedDocs.length);




//Initializing the Embedding model
const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'text-embedding-004',
});


//Initialize Pinecone Client
const pinecone = new Pinecone();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);

//Embed Chunks and Upload to Pinecone
await PineconeStore.fromDocuments(chunkedDocs, embeddings, {
  pineconeIndex,
  maxConcurrency: 5, // Number of concurrent requests at a time -> to push 5 vector embeds.in pinecone DB at a time
});

console.log('PDF chunks embedded and uploaded to Pinecone successfully!');
