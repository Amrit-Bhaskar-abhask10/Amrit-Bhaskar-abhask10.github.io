/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Relation Extraction (RE) using Deep Learning",
    authors:
      "Sriram Chaudhury, Amrit Bhaskar, Arkaprava Nayek, and Vinutha Narayanmurthy",
    conferences:
      "International Conference on Advanced Computing and Communications (ADCOM)",
    researchYr: 2018,
    citebox: "popup1",
    image: "assets/images/research-page/relation_extraction.jpeg",
    citation: {
      vancouver:
        "Sriram Chaudhury, Amrit Bhaskar, Arkaprava Nayek, and Vinutha Narayanmurthy. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 24th annual International Conference on Advanced Computing and Communications 2018.",
    },
    abstract:
      "Distant supervised relation extraction is widely used for finding relational facts from texts, but it is coupled with wrong labeling problem, which in turn hurts the model performance. To address this issue, we present a sentence-level attentionbased model for relation extraction, in which we use convolutional neural networks to get the semantics of sentences. Sentence level attention over multiple instances are built, which in turn significantly reduces the weights of the noisy data. We have tested the system with eKYC data and evaluated the results with respect to ownership relation extraction between organizations.",
    absbox: "absPopup1",
    web_box: "webpopup1",
    web_link: "https://accsindia.org/downloads/ADCOM-2018-papers/ADCOM_2018_paper_35.pdf",
  },

  {
    title: "FACTIFY: A Multi-Modal Fact Verification Dataset",
    authors:
      "Shreyash Mishra, S Suryavardan, Amrit Bhaskar, Parul Chopra, Aishwarya Reganti, Parth Patwa, Amitava Das, Tanmoy Chakraborty, Amit Sheth, Asif Ekbal, and Chaitanya Ahuja",
    conferences:
      "De-Factify: Workshop on Multimodal Fact Checking and Hate Speech Detection, co-located with AAAI 2022. 2022 Vancouver, Canada",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/factify1.jpeg",
    citation: {
      vancouver:
        "@inproceedings{mishra2022factify, title={Factify: A multi-modal fact verification dataset}, author={Mishra, Shreyash and Suryavardan, S and Bhaskar, Amrit and Chopra, Parul and Reganti, Aishwarya and Patwa, Parth and Das, Amitava and Chakraborty, Tanmoy and Sheth, Amit and Ekbal, Asif and others}, booktitle={Proceedings of the First Workshop on Multimodal Fact-Checking and Hate Speech Detection (DE-FACTIFY)}, year={2022}}",
    },
    abstract:
      "Combating fake news is one of the burning societal crisis. It is difficult to expose false claims before they create a lot of damage. Automatic fact/claim verification has recently become a topic of interest among diverse research communities. Forums like FEVER, FNC aim to discuss automatic fact-checking on text. Research efforts and datasets on text fact verification could be found, but there is not much attention towards multi-modal or cross-modal fact-verification. In order to bring the attention of the research community towards understanding multimodal misinformation, we release a multimodal fact checking dataset named FACTIFY. It is notably the largest multimodal fact verification public dataset consisting of 50K data points, covering news from India and the US. FACTIFY contains images, textual claims, reference textual documents and images labeled with three broad categories namely - support, no-evidence, and refute.",
    absbox: "absPopup2",
    web_box: "webpopup2",
    web_link: "https://www.researchgate.net/publication/356342935_FACTIFY_A_Multi-Modal_Fact_Verification_Dataset",
  },

  {
    title:
      "Benchmarking Multi-Modal Entailment for Fact Verification",
    authors: "Parth Patwa, Shreyash Mishra, S Suryavardan, Amrit Bhaskar, Parul Chopra, Aishwarya Reganti, Amitava Das, Tanmoy Chakraborty, Amit Sheth, Asif Ekbal, and Chaitanya Ahuja",
    conferences:
      "De-Factify: Workshop on Multimodal Fact Checking and Hate Speech Detection, co-located with AAAI 2022. 2022 Vancouver, Canada",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/factify2.jpeg",
    citation: {
      vancouver:
        "@article{patwa2021benchmarking, title={Benchmarking Multi-Modal Entailment for Fact Verification}, author={Patwa, Parth and Mishra, Shreyash and Suryavardan, S and Bhaskar, Amrit and Chopra, Parul and Reganti, Aishwarya and Das, Amitava and Chakraborty, Tanmoy and Sheth, Amit and Ekbal, Asif and others}, year={2021}}",
    },
    abstract:
      "Fake news can spread quickly on social media and it is important to detect it before it creates lot of damage. Automatic fact/claim verification has recently become a topic of interest among diverse research communities. We present the findings of the Factify shared task, which aims undertake multi-modal fact verification, organized as a part of the De-Factify workshop at AAAI’22. The task is modeled as a multi-modal entailment task, where each input needs to be classified into one of 5 classes based on entailment and modality. A total of 64 teams participated in the Factify shared task, and of them, 9 teams submitted their predictions on test set. The most successful models were BigBird or other variations of BERT. The highest F1 score averaged across all the classes was 76.82%.",
    absbox: "absPopup3",
    web_box: "webpopup3",
    web_link: "https://www.researchgate.net/publication/359451712_Benchmarking_Multi-Modal_Entailment_for_Fact_Verification",
  },

  {
    title:
      "Low Resource Sequence Tagging using Sentence Reconstruction",
    authors:
      "Tal Perl, Sriram Chaudhury, and Raja Giryes, Acknowledgments: Parul Chopra and Amrit Bhaskar",
    conferences:
      "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/sequence_tagging.jpeg",
    citation: {
      vancouver:
        "Tal Perl, Sriram Chaudhury, and Raja Giryes. 2020. Low Resource Sequence Tagging using Sentence Reconstruction. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 2692–2698, Online. Association for Computational Linguistics.",
    },
    abstract:
      "This work revisits the task of training sequence tagging models with limited resources using transfer learning. We investigate several proposed approaches introduced in recent works and suggest a new loss that relies on sentence reconstruction from normalized embeddings. Specifically, our method demonstrates how by adding a decoding layer for sentence reconstruction, we can improve the performance of various baselines. We show improved results on the CoNLL02 NER and UD 1.2 POS datasets and demonstrate the power of the method for transfer learning with low-resources achieving 0.6 F1 score in Dutch using only one sample from it.",
    absbox: "absPopup4",
    web_box: "webpopup4",
    web_link: "https://aclanthology.org/2020.acl-main.239.pdf",
  },

//  {
//    title: "Dual Super-Resolution Learning for Semantic Segmentation",
//    authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
//    conferences:
//      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
//    researchYr: 2020,
//    citebox: "popup5",
//    image: "assets/images/research-page/semanticSegmentation.png",
//    citation: {
//      vancouver:
//        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
//    },
//    abstract:
//      "This is currently left empty and this can be considered as a dummy data 5",
//    absbox: "absPopup5",
//  },

//  {
//    title: "Deep Unfolding Network for Image Super-Resolution",
//    authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
//    conferences:
//      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
//    researchYr: 2020,
//    citebox: "popup6",
//    image: "assets/images/research-page/deepNetwork.png",
//    citation: {
//      vancouver:
//        "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
//    },
//    abstract:
//      "This is currently left empty and this can be considered as a dummy data 6",
//    absbox: "absPopup6",
//  },

  {
    title:
      "Method and system for generating structured relations between words",
    authors: "Ankit Kumar Singh, Amrit Bhaskar, Parul Chopra, and Sibsambhu KAR",
    conferences:
      "Google Patents",
    researchYr: 2019,
    citebox: "popup7",
    image: "assets/images/research-page/patent.png",
    citation: {
      vancouver:
        "@misc{singh2020method, title={Method and system for generating structured relations between words}, author={Singh, Ankit Kumar and Bhaskar, Amrit and Chopra, Parul and Sibsambhu, KAR}, year={2020}, month=sep # ~10, publisher={Google Patents}, note={US Patent App. 16/358,076} }",
    },
    abstract:
      "A method and system are described for generating structured relations between words in sentences. The method includes generating encoded hidden state vectors using a single layer bi-directional Long Short Term Memory (LSTM) neural network. The method includes generating current hidden state vectors based on word embedding associated with each word at a time stamp ‘t’. The method includes computing attention distribution of each word based on encoded hidden state vectors and current hidden state vectors. The method includes computing context vector of sentences based on attention distribution of each word and the encoded hidden state vectors. The method includes computing vocabulary distribution at time stamp “t” based on context vector and current hidden state vectors. The method includes computing probability distribution of words based on encoded hidden state vectors, current hidden state vectors, and vocabulary distribution. The method includes generating plurality of structured relations between words based on probability distribution.",
    absbox: "absPopup7",
    web_box: "webpopup7",
    web_link: "https://patents.google.com/patent/US20200285932A1/en",
  },
//  {
//    title:
//      "Forward and Backward Information Retention for Accurate Binary Neural Networks",
//    authors:
//      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
//    conferences:
//      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
//    researchYr: 2020,
//    citebox: "popup8",
//    image: "assets/images/research-page/neuralNetworks.jpg",
//    citation: {
//      vancouver:
//        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
//    },
//    abstract:
//      "This is currently left empty and this can be considered as a dummy data 8",
//    absbox: "absPopup8",
//  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      web_box,
      web_link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${web_box}" aria-expanded="false" aria-controls="${web_box}" onclick="window.open('${web_link}','_blank')">
                            LINK
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
