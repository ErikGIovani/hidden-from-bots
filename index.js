export const emailHiddenF = (email) => {
    const emailHidden = document.querySelectorAll('[data-hidden-from-bots="email"]');
    for (let i = 0; i < emailHidden.length; i++) {
        emailHidden[i].style.cssText = 'cursor:pointer';
        emailHidden[i].onclick = function () {
            window.location.href = `mailto:${email}`;
        }
    }
};
  
export const phoneHiddenF = (phone) => {
    const phoneHidden = document.querySelectorAll('[data-hidden-from-bots="phone"]');
    for (let i = 0; i < phoneHidden.length; i++) {
        phoneHidden[i].style.cssText = 'cursor:pointer';
        phoneHidden[i].onclick = function () {
            window.location.href = `tel:${phone}`;
        }
    }
};

export const multiEmailHiddenF = (name, email) => {
    const multiEmailHidden = document.querySelectorAll(`[data-hidden-from-bots="${name}"]`);
    for (let i = 0; i < multiEmailHidden.length; i++) {
        multiEmailHidden[i].style.cssText = 'cursor:pointer';
        multiEmailHidden[i].onclick = function () {
            window.location.href = `mailto:${email}`;
        }
    }
};

export const multiPhoneHiddenF = (name, phone) => {
    const multiPhoneHidden = document.querySelectorAll(`[data-hidden-from-bots="${name}"]`);
    for (let i = 0; i < multiPhoneHidden.length; i++) {
        multiPhoneHidden[i].style.cssText = 'cursor:pointer';
        multiPhoneHidden[i].onclick = function () {
            window.location.href = `tel:${phone}`;
        }
    }
};