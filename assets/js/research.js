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
  },

  {
    title: "FACTIFY: A Multi-Modal Fact Verification Dataset",
    authors:
      "Shreyash Mishra, S Suryavardan, Amrit Bhaskar, Parul Chopra, Aishwarya Reganti, Parth Patwa, Amitava Das, Tanmoy Chakraborty, Amit Sheth, Asif Ekbal, and Chaitanya Ahuja",
    conferences:
      "De-Factify: Workshop on Multimodal Fact Checking and Hate Speech Detection, co-located with AAAI 2022. 2022 Vancouver, Canada",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/factify.jpeg",
    citation: {
      vancouver:
        "@inproceedings{mishra2022factify, title={Factify: A multi-modal fact verification dataset}, author={Mishra, Shreyash and Suryavardan, S and Bhaskar, Amrit and Chopra, Parul and Reganti, Aishwarya and Patwa, Parth and Das, Amitava and Chakraborty, Tanmoy and Sheth, Amit and Ekbal, Asif and others}, booktitle={Proceedings of the First Workshop on Multimodal Fact-Checking and Hate Speech Detection (DE-FACTIFY)}, year={2022}}",
    },
    abstract:
      "Combating fake news is one of the burning societal crisis. It is difficult to expose false claims before they create a lot of damage. Automatic fact/claim verification has recently become a topic of interest among diverse research communities. Forums like FEVER, FNC aim to discuss automatic fact-checking on text. Research efforts and datasets on text fact verification could be found, but there is not much attention towards multi-modal or cross-modal fact-verification. In order to bring the attention of the research community towards understanding multimodal misinformation, we release a multimodal fact checking dataset named FACTIFY. It is notably the largest multimodal fact verification public dataset consisting of 50K data points, covering news from India and the US. FACTIFY contains images, textual claims, reference textual documents and images labeled with three broad categories namely - support, no-evidence, and refute.",
    absbox: "absPopup2",
  },

//  {
//    title:
//      "Benchmarking Multi-Modal Entailment for Fact Verification",
//    authors: "Parth Patwa, Shreyash Mishra, S Suryavardan, Amrit Bhaskar, Parul Chopra, Aishwarya Reganti, Amitava Das, Tanmoy Chakraborty, Amit Sheth, Asif Ekbal, and Chaitanya Ahuja",
//    conferences:
//      "De-Factify: Workshop on Multimodal Fact Checking and Hate Speech Detection, co-located with AAAI 2022. 2022 Vancouver, Canada",
//    researchYr: 2021,
//    citebox: "popup3",
//    image: "assets/images/research-page/factify2.jpeg",
//    citation: {
//      vancouver:
//        "@article{patwa2021benchmarking, title={Benchmarking Multi-Modal Entailment for Fact Verification}, author={Patwa, Parth and Mishra, Shreyash and Suryavardan, S and Bhaskar, Amrit and Chopra, Parul and Reganti, Aishwarya and Das, Amitava and Chakraborty, Tanmoy and Sheth, Amit and Ekbal, Asif and others}, year={2021}}",
//    },
//    abstract:
//      "Fake news can spread quickly on social media and it is important to detect it before it creates lot of damage. Automatic fact/claim verification has recently become a topic of interest among diverse research communities. We present the findings of the Factify shared task, which aims undertake multi-modal fact verification, organized as a part of the De-Factify workshop at AAAI’22. The task is modeled as a multi-modal entailment task, where each input needs to be classified into one of 5 classes based on entailment and modality. A total of 64 teams participated in the Factify shared task, and of them, 9 teams submitted their predictions on test set. The most successful models were BigBird or other variations of BERT. The highest F1 score averaged across all the classes was 76.82%.",
//    absbox: "absPopup3",
//  },

  {
    title:
      "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
    authors:
      "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Dual Super-Resolution Learning for Semantic Segmentation",
    authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  {
    title: "Deep Unfolding Network for Image Super-Resolution",
    authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 6",
    absbox: "absPopup6",
  },

  {
    title:
      "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    authors:
      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup8",
    image: "assets/images/research-page/neuralNetworks.jpg",
    citation: {
      vancouver:
        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
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
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
