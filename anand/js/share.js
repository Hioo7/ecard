document.getElementById('shareButton').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default action of anchor tag
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Check out this awesome content!',
                text: 'Check out this page I found!',
                url: window.location.href // Sharing the current page URL
            });
            console.log('Content shared successfully');
        } catch (error) {
            console.log('Error sharing content:', error);
        }
    } else {
        alert('Sharing is not supported on this browser.');
    }
});