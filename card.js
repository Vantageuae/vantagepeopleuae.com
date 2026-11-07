const shareButton = document.getElementById('share-button');
const shareStatus = document.getElementById('share-status');
const cardUrl = 'https://www.vantagepeopleuae.com/card';
if (navigator.share || navigator.clipboard) {
  shareButton.hidden = false;
  shareButton.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({title: 'Munira Ahmed | Vantage', url: cardUrl});
      } else {
        await navigator.clipboard.writeText(cardUrl);
        shareStatus.textContent = 'Card link copied.';
      }
    } catch (error) {
      if (error.name !== 'AbortError') shareStatus.textContent = 'Please copy the card link shown below.';
    }
  });
}
