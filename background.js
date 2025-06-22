chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: 'popup.html',
    type: 'popup',
    width: 360,
    height: 500,
    top: 70,
    left: screen.availWidth - 400
  });
});
