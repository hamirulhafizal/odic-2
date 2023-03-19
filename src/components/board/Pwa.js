import React from 'react';

const Pwa = () => {
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    //if app can be installed, assign the event to deferred prompt variable
    deferredPrompt = e;
    console.log('masuk');
    // Show the add to home screen prompt
    deferredPrompt?.prompt();
  });

  window.addEventListener('load', () => {
    //select the button with ID pwaAppInstallBtn
    const pwaAppInstallBtn = document.querySelector('#pwaAppInstallBtn');
    pwaAppInstallBtn.addEventListener('click', async () => {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt?.userChoice;
        if (outcome === 'accepted') {
          deferredPrompt = null;
        }
      } else {
        console.log('deferred prompt is null [Website cannot be installed]');
      }
    });
  });

  // Listen for the user's response to the add to home screen prompt
  window.addEventListener('appinstalled', (evt) => {
    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Log the installation event
    console.log('App installed');
  });

  return <></>;
};

export default Pwa;
