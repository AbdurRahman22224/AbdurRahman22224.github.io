export const resumeData = {
  name: "Abdur Rahman",
  location: "Jamshedpur, India",
  email: "abdurrahman22224@gmail.com",
  phone: "+91 7368052941",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdurrahman22224/",
    kaggle: "https://www.kaggle.com/code/abdurrahman22224/",
    github: "https://github.com/AbdurRahman22224"
  },
  summary: "Motivated researcher with a strong academic record (3rd rank in class) and hands-on experience in Machine Learning, Deep Learning and NLP. Skilled in Python, Scikit-learn, and PyTorch, with a passion for applying data-driven methods to uncover insights and advance research in Statistics and Data Science.",
  education: [
    {
      institution: "National Institute of Technology Jamshedpur, India",
      degree: "B. Tech. in Production and Industrial Engineering",
      date: "Nov’ 22 – May’ 26",
      gpa: "8.49/10",
      coursework: "Engineering Mathematics I & II(Linear Algebra, Calculus), Introduction to Programming and Data Structures, Operations Research, Statistics and Probability, Machine Learning, Deep Learning."
    }
  ],
  researchInterest: "I have a strong interest in Statistics and Data Science, with a focus on Machine Learning, Deep Learning, and Natural Language Processing, particularly in the healthcare industry. I am also motivated to apply these techniques to solve real-world problems by developing data-driven and interpretable solutions that can have a positive impact on people’s lives.",
  experience: [
    {
      role: "Data Science Intern",
      company: "HealthSphere",
      date: "Feb’ 24 – Jun’ 24",
      points: [
        "Comparing statistical models (ARIMA, SARIMA) with modern ML models (CatBoost) for the prediction of health metrics such as Blood Pressure, Sugar Levels, and SpO2.",
        "Improved the model’s accuracy and reduced Mean Absolute Error using CatBoost.",
        "Fine-tuned BERT model on a 20k-sample emotion dataset and improved the existing mood classifier’s accuracy from 89% to 94%.",
        "Designed a Gmail parser using LangChain for automated email summarization, applying Named Entity Recognition (NER) to extract insights from unstructured text and visualize them through a dashboard."
      ]
    }
  ],
  projects: [
    {
      title: "Food Delivery Time Prediction on AWS",
      type: "Individual Project",
      points: [
        "Built a FastAPI-based food delivery time prediction system using LightGBM, with a complete ML workflow incorporating DVC and MLflow for data/model versioning, seamlessly integrated with AWS S3.",
        "Created a Dockerfile and pushed the container image to the Elastic Container Registry (ECR) for deployment.",
        "Deployed the service on AWS using Auto Scaling Groups (ASG) with EC2 instances behind an Application Load Balancer (ALB) to ensure scalability and high availability.",
        "Automated CI/CD pipeline using GitHub Actions and CodeDeploy, and monitored deployments with CloudWatch."
      ]
    },
    {
      title: "Entity Value Extraction using CNN and LSTM",
      type: "Team Project",
      points: [
        "Developed a custom deep learning model using the Keras Functional API, combining CNN and LSTM layers for multi-modal data processing with over 3 crore parameters.",
        "Implemented a robust data pipeline with a custom generator handling 2 lakh+ images for efficient training, and preprocessing numeric and text-based features alongside image data.",
        "Implemented feature extraction using a pre-trained architecture, applying transfer learning and freezing layers to improve model efficiency."
      ]
    },
    {
      title: "Course-Specific RAG Chatbot",
      type: "Individual Project",
      points: [
        "Made a Retrieval-Augmented Generation (RAG) chatbot using LangChain, Ollama, ChromaDB, and Chainlit.",
        "Used the Ollama server to run Llama3 locally for low-latency inference, and improved the chatbot’s understanding by retrieving relevant context using ChromaDB.",
        "Designed a user-friendly chatbot interface with Chainlit for smooth, real-time interaction and engagement."
      ]
    }
  ],
  skills: {
    languages: ["Python", "SQL", "C", "HTML", "CSS", "JavaScript"],
    technologies: ["Machine Learning", "Deep Learning", "NLP", "Time Series Forecasting", "LLMs", "Generative AI"],
    libraries: ["NumPy", "Pandas", "SciPy", "SkLearn", "PyTorch", "TensorFlow", "Matplotlib", "Seaborn", "Streamlit", "LangChain", "Chainlit", "FastAPI", "HuggingFace", "Ollama"],
    mlops: ["Git", "GitHub", "DVC", "Dagshub", "MLflow", "ECR", "EC2", "ASG", "S3", "CodeDeploy", "ALB", "IAM Roles"]
  }
};
