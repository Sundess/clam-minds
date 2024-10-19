// Array of resources
const resources = [
  {
    title: "Depression",
    description:
      "Depression is a common yet serious mental health condition that affects millions of people worldwide. It is characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities once enjoyed. ",
    imageUrl: "../images/resource/depression.svg",
    link: "https://mhanational.org/conditions/depression",
  },
  {
    title: "Bipolar Disorder",
    description:
      "Bipolar disorder is a mental health condition marked by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression). These shifts can affect sleep, energy levels, and daily functioning, often leading to significant challenges.",
    imageUrl: "../images/resource/bipolar_disorder.svg", // Update this with the actual image URL
    link: "https://www.nami.org/about-mental-illness/mental-health-conditions/bipolar-disorder/",
  },
  {
    title: "Anxiety",
    description:
      "Anxiety is a normal response to stress that can become overwhelming when it interferes with daily life. It often manifests as excessive worry, restlessness, and physical symptoms such as increased heart rate or sweating. While anxiety can be challenging, various treatment options, including therapy and medication, can help individuals manage their symptoms effectively.",
    imageUrl: "../images/resource/Anxiety.jpg", // Update this with the actual image URL
    link: "https://mhanational.org/conditions/anxiety",
  },
  {
    title: "Mind (Mental Health Charity)",
    description:
      "Mind provides advice and support to anyone experiencing a mental health problem, helping to ensure that nobody has to face their mental health issues alone.",
    imageUrl: "../images/Media.svg", // Update this with the actual image URL
    link: "https://www.mind.org.uk/",
  },
  {
    title: "NAMI Peer-to-Peer",
    description:
      "NAMI Peer-to-Peer is a free, eight-session educational program for adults with mental health conditions who are looking to better understand themselves and their recovery.",
    imageUrl: "../images/Media.svg", // Update this with the actual image URL
    link: "https://www.nami.org/support-education/mental-health-education/nami-peer-to-peer/",
  },
];

// Function to generate cards
function generateResourceCards() {
  const container = document.getElementById("resource-cards-container");

  resources.forEach((resource) => {
    const card = document.createElement("div");
    card.className = "resource-card";

    card.innerHTML = `
        <div class="resource-content">
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <a href="${resource.link}" class="btn" target="_blank">Learn More</a>
        </div>
        <div class="resource-image">
          <img src="${resource.imageUrl}" alt="${resource.title} Logo" />
        </div>
      `;

    container.appendChild(card);
  });
}

// Call the function to generate the cards
generateResourceCards();
