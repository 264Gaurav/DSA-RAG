# DSA-RAG

DSA instructor RAG system with memory and persist previous conversation as context.

# Project setup :

## install -

`npm i @langchain/pinecone @langchain/core @pinecone-database/pinecone @langchain/community @google/genai @langchain/google-genai @langchain/textsplitters dotenv pdf-parse readline-sync`

## Phase One: Storing vectors into vector DB

### Step0: Get Gemini API key and Pinecone API

GEMINI_API_KEY=<Google_gemini_key_from_gemini>
PINECONE_API_KEY= <your_api_key>
PINECONE_ENVIRONMENT= us-east-1
PINECONE_INDEX_NAME= <your_index_name_in_pinecone>
