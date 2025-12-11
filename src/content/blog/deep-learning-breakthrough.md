---
title: "The Evolution of Seq2Seq Models: From Encoder-Decoder to Transformers"
description: "A quick look at how Seq2Seq models grew from simple encoder–decoders to powerful transformers, and why that shift changed NLP forever"
pubDate: 2024-08-27
tags: ["Deep Learning", "seq2seq", "NLP", "Transformer"]
---

The first sequence-to-sequence (seq2seq) model was introduced by researchers at Google in Dec 2014. The model was described in the **“**[**Sequence to Sequence Learning with Neural Networks**](https://arxiv.org/pdf/1409.3215)**”** paper by Ilya Sutskever, Oriol Vinyals, and Quoc V. Le.

The seq2seq model has been an important architecture for many tasks, including machine translation, text summarization, and chatbot systems. These models accept an input sequence and generate a corresponding output sequence. Their architecture allows for the processing of variable-length input and output sequences.

Over the period, this architecture evolved significantly which resulted in the development of the “**Transformer**” model which became the backbone of many state-of-the-art NLP systems today like ChatGPT and many more. The researchers at Google published the paper “[**Attention Is All You Need**](https://arxiv.org/abs/1706.03762)**”** describing the **Transformer** architecture in June 2017, which is an attention based seq2seq model. In this blog, we’ll trace the evolution of seq2seq models and highlight the key innovations that led to the **Transformer** architecture.

1.  **Encoder-Decoder architecture**:- The seq2seq model consists of two main components encoder and decoder.
    **Encoder**: The encoder takes the input sequence (e.g., a sentence in English) and compresses its information into a fixed-length **context** **vector**. The input sequence passes through a series of recurrent cells such as LSTMs (Long Short-Term Memory units) or GRUs (Gated Recurrent Units) which process the sequence one token at a time and update a hidden state which is a vector.
    **Decoder**: The decoder then takes this context vector and generates the output sequence (e.g., the translated sentence in Hindi). Like the encoder, the decoder has the same recurrent cells and processes the input tokens one at a time, updating its hidden state based on the current token and the previous hidden state.

![Encoder-Decoder architecture](https://miro.medium.com/v2/resize:fit:1202/format:webp/1*b2wwxUv0X2AEHTzpAFf9pw.png)

The main problem with this architecture is the context vector, it is a fixed-length representation of the entire input sequence, regardless of its length. In the case of short sentences, it performs well but while processing larger sentences(>30 words) it is challenging for a single context vector to maintain the information and it is also not logical that we rely on a single **static** context vector for the entire sentence, which can lead to information loss.

![If the sentence length is greater than 30 the BLUE score of the seq2seq model decreases drastically.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vMftYNKGMjHwebpNw1U8wQ.png)

2. **Attention Mechanism**:- The Attention Mechanism was introduced by Bahdanau et al. in 2015 in the “[**NEURAL MACHINE TRANSLATION BY JOINTLY LEARNING TO ALIGN AND TRANSLATE**](https://arxiv.org/pdf/1409.0473)” paper. It was introduced in encoder-decoder architecture to address the limitations of using a single context vector. The key idea is to allow the model to focus on specific parts of the input sequence when generating each word in the output sequence. Instead of relying on a single context vector, the decoder can access different parts of the input sequence directly by assigning different weights or attention.
At every time step of the decoder attention mechanism calculate a set of weights corresponding to each hidden state in the input sequence. These weights decide how much focus the decoder should place on each token (hidden state) when generating the next word in the output sequence. This dynamic nature of the attention vector ensures that important information isn’t lost, even with longer sequences.
Seq2seq models using RNNs(e.g., Deep LSTMs or GRUs) still had limitations, particularly in terms of efficiency and scalability.

### Limitations of RNN-based Seq2Seq architecture

*   **Sequential Processing**: RNNs process the sequences one token at a time, so it is difficult to integrate parallel processing which eventually slows down training and prediction time.
*   **Difficulty in Parallelization**: The sequential nature of RNNs made it challenging to take full advantage of modern hardware accelerators, which are optimized for parallel processing.

All the above limitations lead to the introduction of [**Transformer**](https://arxiv.org/pdf/1706.03762) architecture. The heart of the transformer architecture is **Self Attention**.
It’s a big topic on its own and it deserves a detailed explanation, so stay tuned for a dedicated blog on that.