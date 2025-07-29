# DSA-RAG: Data Structures & Algorithms RAG System

A powerful Retrieval Augmented Generation (RAG) system designed to provide intelligent answers to Data Structures and Algorithms questions using PDF content and advanced AI models.

## 🚀 Features

- **PDF Document Processing**: Automatically processes and chunks DSA PDF content
- **Vector Embeddings**: Uses Google's Gemini embeddings for semantic search
- **Pinecone Vector Database**: Stores and retrieves document chunks efficiently
- **Conversational AI**: Powered by Google's Gemini 2.0 Flash model
- **Query Transformation**: Intelligently rephrases questions for better context retrieval
- **Multiple Interfaces**: Command-line interface and REST API
- **Conversation Memory**: Maintains context across multiple interactions

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key
- Pinecone account and API key

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/264Gaurav/DSA-RAG.git
   cd DSA-RAG
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PINECONE_API_KEY=your_pinecone_api_key_here
   PINECONE_INDEX_NAME=your_pinecone_index_name
   PINECONE_CONTROLLER_HOST_URL=your_pinecone_controller_host_url
   PORT=3000
   ```

4. **Add your DSA PDF**
   Place your DSA PDF file in the `assets/` directory as `dsa.pdf`

## 🔧 Setup Process

### Step 1: Initialize the Vector Database

Run the indexing script to process your PDF and upload chunks to Pinecone:

```bash
node index.js
```

This script will:

- Load the PDF from `assets/dsa.pdf`
- Split it into chunks of 500 characters with 50 character overlap
- Generate embeddings using Google's text-embedding-004 model
- Upload the embeddings to your Pinecone index

### Step 2: Choose Your Interface

#### Option A: Command Line Interface

```bash
node query.js
```

This starts an interactive CLI where you can ask questions about DSA topics.

#### Option B: REST API Server

```bash
node server.js
```

This starts a web server on port 3000 (or your configured PORT).

## 📖 Usage

### Command Line Interface

```bash
node query.js
# Then type your questions interactively
```

### REST API

Start the server and send POST requests to `/chat`:

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "What is a binary tree?"}'
```

Example response:

```json
{
  "answer": "A binary tree is a hierarchical data structure where each node has at most two children..."
}
```

## 🏗️ Architecture

### Project Structure

```
DSA-RAG/
├── assets/
│   └── dsa.pdf          # Your DSA content
├── index.js             # PDF processing and vector upload
├── query.js             # CLI interface
├── server.js            # REST API server
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

### Core Components

1. **Document Processing** (`index.js`)

   - PDF loading and text extraction
   - Text chunking with overlap
   - Vector embedding generation
   - Pinecone database upload

2. **Query Processing** (`query.js` & `server.js`)

   - Query transformation for better context retrieval
   - Vector similarity search
   - Context-aware answer generation
   - Conversation history management

3. **AI Models**
   - **Embeddings**: Google's text-embedding-004
   - **Generation**: Google's Gemini 2.0 Flash
   - **Vector Database**: Pinecone

## 🔄 Workflow

1. **Document Ingestion**: PDF → Chunks → Embeddings → Pinecone
2. **Query Processing**: User Question → Query Transformation → Vector Search
3. **Answer Generation**: Retrieved Context + Question → Gemini → Answer

## 📚 Dependencies

- `@google/genai` & `@google/generative-ai`: Google's AI models
- `@langchain/*`: LangChain framework for RAG operations
- `@pinecone-database/pinecone`: Pinecone vector database client
- `express`: Web server framework
- `pdf-parse`: PDF text extraction
- `readline-sync`: CLI interaction
- `dotenv`: Environment variable management

## 🎯 Use Cases

- **Student Learning**: Get instant answers to DSA questions
- **Interview Preparation**: Practice with comprehensive explanations
- **Educational Content**: Supplement learning materials
- **Research**: Quick access to DSA concepts and implementations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **API Key Errors**: Ensure all environment variables are properly set
2. **PDF Loading Issues**: Check that `assets/dsa.pdf` exists and is readable
3. **Pinecone Connection**: Verify your Pinecone credentials and index name
4. **Memory Issues**: Large PDFs may require more memory; consider reducing chunk size

### Performance Tips

- Adjust `CHUNK_SIZE` and `CHUNK_OVERLAP` in `index.js` for optimal performance
- Use `maxConcurrency` parameter to control Pinecone upload speed
- Consider using a larger Pinecone index for better search results

## 📞 Support

For issues and questions:

- Create an issue on GitHub
- Check the troubleshooting section above
- Review the code comments for implementation details

---

**Happy Learning! 🎓**
