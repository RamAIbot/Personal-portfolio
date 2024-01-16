import {AINavbar} from "./AINavbar";
import webpage_img from "../../assets/images/webpage1.jpeg";

export const NLPProject = () => {

        return (
            <div className="ai_project_coding">
                <AINavbar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h1>Natural Langauage Processing Specialization - DeepLearning.AI (Coursera)</h1>
                            <p style={{textAlign:'left',background:"black",padding:"30px"}}>The Natural Language Processing specialization offered by DeepLearning.AI through Coursera covers fundamental concepts ranging from word representation, bag-of-words models, Markov chains, and logistic regression to advanced topics like deep neural networks and encoder-decoder mechanisms, culminating in highly sophisticated attention-based modeling using transformers. This specialization is organized into four sections: Natural Language Processing with Classification and Vector Spaces, Natural Language Processing with Probabilistic Models, Natural Language Processing with Sequence Models, and Natural Language Processing with Attention Models. Each section comprises lecture materials, homework, practice tests, and a final project. The projects in this specialization are developed using the Trax framework from Google.</p>

                            <p style={{textAlign:'left',background:"black",padding:"30px"}}>The specialization encompasses key topics such as:

                            <ul style={{textAlign:'left',background:"black"}}>
                                <li>Utilizing logistic regression, naïve Bayes, and word vectors to implement sentiment analysis, complete analogies, and translate words.</li>
                                <li>Employing dynamic programming, hidden Markov models, and word embeddings to implement autocorrect, autocomplete, and identify part-of-speech tags for words.</li>
                                <li>Leveraging recurrent neural networks, LSTMs, GRUs, and Siamese networks in Trax for tasks such as sentiment analysis, text generation, and named entity recognition.</li>
                                <li>Applying encoder-decoder, causal, and self-attention mechanisms to machine-translate complete sentences, summarize text, build chatbots, and perform question-answering.</li>
                            </ul></p>


                            <a href="https://coursera.org/share/6b3c1137850f830ad3617de8d03cfc16"><button type="button" className="btn btn-outline-light" >Certificate</button></a>
                        </div>
                    </div>


                </div>

            </div>
        )
}