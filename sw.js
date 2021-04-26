self.addEventListener('push', e => {
    e.waitUntil(self.registration.sendNotification('text message'));
})