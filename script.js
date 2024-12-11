
  // Array of video URLs
  var videoUrls = [
    "D:\recipe website project\video\video1.mp4",
    "D:\recipe website project\video\video2.mp4",
    "D:\recipe website project\video\video3.mp4",
    "D:\recipe website project\video\video4.mp4",
    "D:\recipe website project\video\video5.mp4",
    "D:\recipe website project\video\video4.mp4",
    "D:\recipe website project\video\video4.mp4",
    "D:\recipe website project\video\video4.mp4",
    // Add more video URLs as needed
  ];

  // Get a random video URL
  var randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

  // Set the random video as the background
  var backgroundVideo = document.getElementById("background-video");
  backgroundVideo.style.backgroundImage = "url('" + randomVideoUrl + "')";

