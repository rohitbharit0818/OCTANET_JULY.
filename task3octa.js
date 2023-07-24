// Simulating dynamic content loading for featured smartphones and latest news
document.addEventListener("DOMContentLoaded", () => {
    // Replace these URLs with actual images and content for featured smartphones and latest news
    const featuredSmartphonesData = [
      { image: "phone1.jpg", title: "Smartphone 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { image: "phone2.jpg", title: "Smartphone 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];
  
    const latestNewsData = [
      { image: "news1.jpg", title: "News 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { image: "news2.jpg", title: "News 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];
  
    const featuredSmartphonesSection = document.querySelector(".featured-smartphones");
    const latestNewsSection = document.querySelector(".latest-news");
  
    // Function to create a card for featured smartphones and latest news
    const createCard = (image, title, description, linkText) => {
      const card = document.createElement("div");
      card.classList.add("smartphone-card");
  
      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
  
      const h3 = document.createElement("h3");
      h3.textContent = title;
  
      const p = document.createElement("p");
      p.textContent = description;
  
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = linkText;
  
      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(a);
  
      return card;
    };
  
    // Populate featured smartphones section
    featuredSmartphonesData.forEach((data) => {
      const card = createCard(data.image, data.title, data.description, "View Details");
      featuredSmartphonesSection.appendChild(card);
    });
  
    // Populate latest news section
    latestNewsData.forEach((data) => {
      const card = createCard(data.image, data.title, data.description, "Read More");
      latestNewsSection.appendChild(card);
    });
  });
  