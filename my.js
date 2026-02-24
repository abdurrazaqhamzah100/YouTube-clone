const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

const videos = [
  {
    title: "Learn HTML in 1 Hour",
    channel: "Code With Me",
    views: "1.2M views",
    time: "2 days ago",
    thumbnail: "https://picsum.photos/seed/html/320/180",
    avatar: "https://i.pravatar.cc/36?img=1",
  },
  {
    title: "CSS Flexbox Full Guide",
    channel: "CSSMaster",
    views: "850K views",
    time: "1 week ago",
    thumbnail: "https://picsum.photos/seed/css/320/180",
    avatar: "https://i.pravatar.cc/36?img=2",
  },
  {
    title: "JavaScript for Beginners",
    channel: "JS World",
    views: "3.4M views",
    time: "3 months ago",
    thumbnail: "https://picsum.photos/seed/js/320/180",
    avatar: "https://i.pravatar.cc/36?img=3",
  },
  {
    title: "Build a YouTube Clone",
    channel: "DevProjects",
    views: "500K views",
    time: "5 days ago",
    thumbnail: "https://picsum.photos/seed/yt/320/180",
    avatar: "https://i.pravatar.cc/36?img=4",
  },
  {
    title: "Responsive Web Design Tips",
    channel: "WebDesignHub",
    views: "220K views",
    time: "2 weeks ago",
    thumbnail: "https://picsum.photos/seed/rwd/320/180",
    avatar: "https://i.pravatar.cc/36?img=5",
  },
  {
    title: "Dark Mode UI Design",
    channel: "UIDesigner",
    views: "980K views",
    time: "4 months ago",
    thumbnail: "https://picsum.photos/seed/dark/320/180",
    avatar: "https://i.pravatar.cc/36?img=6",
  },
  {
    title: "Git & GitHub for Beginners",
    channel: "OpenSourcer",
    views: "1.8M views",
    time: "6 months ago",
    thumbnail: "https://picsum.photos/seed/git/320/180",
    avatar: "https://i.pravatar.cc/36?img=7",
  },
  {
    title: "React JS Crash Course",
    channel: "ReactDev",
    views: "4.1M views",
    time: "1 year ago",
    thumbnail: "https://picsum.photos/seed/react/320/180",
    avatar: "https://i.pravatar.cc/36?img=8",
  },
];

const categories = document.querySelectorAll(".category");

categories.forEach((button) => {
  button.addEventListener("click", () => {
    categories.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const videoFeed = document.getElementById("video-feed");

videos.forEach((video) => {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");

  videoCard.innerHTML = `
    <img src="${video.thumbnail}" class="thumbnail" />
    <div class="video-info">
      <img src="${video.avatar}" class="avatar" />
      <div>
        <h4>${video.title}</h4>
        <p>${video.channel}</p>
        <p>${video.views} • ${video.time}</p>
      </div>
    </div>
  `;

  videoFeed.appendChild(videoCard);
});
