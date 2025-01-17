AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Applied Scientist Intern",
    cardImage: "assets/images/experience-page/amazon.png",
    place: "Amazon, Seattle, WA, US",
    time: "(May, 2022 - Aug, 2022)",
    desp: "<li>Customer credit model: Worked on enhancing the performance of one of the customer credit ML models. Enhanced the model performance by 1.24% in accuracy and 4.48% in AUC over the existing model in production.</li>",
  },
  {
    title: "Senior Data Analyst",
    cardImage: "assets/images/experience-page/tiger_analytics.png",
    place: "Tiger Analytics, Bengaluru, India",
    time: "(Nov, 2019 - July, 2021)",
    desp: "<li>Demand Forecasting for Taco Bell: Developed a demand forecasting framework for Taco Bell. The error between the actual and predicted results was at least 10% better on average than the client’s base model.</li><li>AutoML Code Template: Developed an AutoML code template in pyspark for a Machine Learning Pipeline with Integrated Data discovery, Data processing, and Model building for solving frequent use cases and projects.</li><li>Advisor segmentation for Equitable: Developed an advisor segmentation model for one of the American financial services and insurance companies based on agent’s tenure, asset under management, products sold, etc.</li><li>90-day lapse model for Confie: Developed a 90-day customer policy lapse model with 82% accuracy.</li>",
  },
  {
    title: "Project Engineer",
    cardImage: "assets/images/experience-page/wipro2.jpeg",
    place: "Wipro, Bengaluru, India",
    time: "(Aug, 2017 - Oct, 2019)",
    desp: "<li>Relation Extraction: Developed supervised DL models using CNN and attention-based bi-LSTM with ELMO embeddings with 0.8 F-1 scores. Built, Presented, and Delivered frontend UI for internal use using Tkinter.</li><li>Sequence tagging: Built a deep learning model for sequence tagging for accurate information extraction using GAN-based transfer learning between distant domains. Enhanced accuracy by 10% over the state-of-art results.</li><li>Intent Detection with Zero-Shot Learning: Built an intent classification model using CNN and Capsule Network. Used zero-shot learning on intents when no labeled utterances are present with a 0.76 F1 score.</li><li>Neural Machine Translation: Assessed and Tested approaches like Attention-based seq2seq and Transformer to create a single multilingual model for 7 Indian languages, achieved a BLEU score of 26.25 for Hindi-English.</li><li>Document Clustering: Built an unsupervised document clustering model using K-means with 75% accuracy.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GluonTS - Probabilistic Time Series Modeling",
    cardImage: "assets/images/experience-page/gluonts.jpeg",
    description:
      "Fixed bug - Anomaly detection",
    open_link:"https://github.com/awslabs/gluonts/blob/dev/examples/anomaly_detection.py",
  },
 {
   title: "Apache Sedona",
   cardImage: "assets/images/experience-page/apache_sedona.jpeg",
   description:
     "Added ST_NDims function",
     open_link:"https://github.com/apache/incubator-sedona/pull/720",
 },
//  {
//    title: "PClub Summer Of Code 2020",
//    cardImage: "assets/images/experience-page/3.jpg",
//    description:
//      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//  },
//  {
//    title: "Hakin-Codes",
//    cardImage: "assets/images/experience-page/4.jpg",
//    description:
//      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, open_link }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px" onclick="window.open('${open_link}','_blank');">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p>
          </div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
