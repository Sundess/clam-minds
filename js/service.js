document.addEventListener("DOMContentLoaded", function () {
  const communityCardsContainer = document.querySelector(".community-cards");

  // Data for community cards
  const communityGroups = [
    {
      name: "John Doe",
      role: "Community Manager",
      groupName: "Morning Exercise Group",
      category: "Exercise/Motivation/Guidance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas modi quas alias obcaecati. Totam dolor maxime, officiis voluptatibus ea repellendus temporibus tenetur nam rem impedit saepe",
      initial: "J",
    },
    {
      name: "Jane Smith",
      role: "Community Leader",
      groupName: "Wellness Warriors",
      category: "Health/Fitness/Motivation",
      description:
        "A group focused on improving overall wellness with daily tips, motivation, and exercise routines to keep you healthy and active!",
      initial: "J",
    },
    {
      name: "Alex Johnson",
      role: "Group Organizer",
      groupName: "Tech Enthusiasts",
      category: "Technology/Innovation/Guidance",
      description:
        "Join fellow tech enthusiasts to explore the latest trends in the industry and share knowledge on cutting-edge technologies.",
      initial: "A",
    },
  ];

  // The same image URL for all community cards
  const commonImageUrl = "../images/Media.svg";

  // Function to create a single community card with the same image
  function createCommunityCard(group) {
    const card = document.createElement("div");
    card.className = "community-card";

    const cardHeader = `
        <div class="community-card-header">
          <div class="circle">
            <span class="inital-name">${group.initial}</span>
          </div>
          <div>
            <p>${group.name}</p>
            <p>${group.role}</p>
          </div>
        </div>`;

    // Adding the same image for all cards
    const cardImage = `<img src="${commonImageUrl}" alt="${group.groupName}" />`;

    const cardContent = `
        <h3 class="community-card-gname">${group.groupName}</h3>
        <h4 class="category">${group.category}</h4>
        <p class="description">${group.description}</p>
        <div class="community-card-button">
          <button class="green-btn community-btn">Join Us</button>
        </div>`;

    card.innerHTML = cardHeader + cardImage + cardContent;

    return card;
  }

  // Create multiple community cards
  communityGroups.forEach((group) => {
    const card = createCommunityCard(group);
    communityCardsContainer.appendChild(card);
  });
});
