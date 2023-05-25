export function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  }
  
  export function countComments(commentDetails) {
    let totalComments = 0;
  
    for (let i = 0; i < commentDetails.length; i++) {
      totalComments = commentDetails[i].comments.length;
    }
  
    return totalComments;
  }
  
  export function withEllipsis(text) {
    const maxLength = 40;
    const tabletWidth = 768;
  
    if (window.innerWidth < tabletWidth && text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      const truncatedLastWord = truncatedText.substring(0, lastSpaceIndex);
      return truncatedLastWord + "...";
    }
    return text;
  }