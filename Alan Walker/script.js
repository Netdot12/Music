function postComment() {
  const nameInput = document.getElementById("name-input");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comments-list");
  const commentCount = document.getElementById("comment-count");

  if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
    const newComment = document.createElement("li");

    const commentHeader = document.createElement("div");
    commentHeader.className = "comment-header";
    commentHeader.textContent = `${nameInput.value} - ${getCurrentTime()}`;
    
    const commentText = document.createElement("p");
    commentText.textContent = commentInput.value;

    newComment.appendChild(commentHeader);
    newComment.appendChild(commentText);

    commentList.appendChild(newComment);

    // Update comment count
    const commentsCount = commentList.getElementsByTagName("li").length;
    commentCount.textContent = `${commentsCount} Comment${commentsCount !== 1 ? 's' : ''}`;

    // Clear input fields
    nameInput.value = "";
    commentInput.value = "";
  }
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

