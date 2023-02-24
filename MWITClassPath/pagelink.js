export function setupButton(element, url) {
    const goToPage = () => {
      window.location.href = url
    }
  
    element.addEventListener('click', goToPage)
  }
  