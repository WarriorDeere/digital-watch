class display {

    newDigit(content) {
        this.UUID = crypto.randomUUID();

        const digitSection = document.querySelector('.digit-display')
        const digitContainer = document.createElement('div');

        digitSection.appendChild(digitContainer);
        digitContainer.classList.add('digit-container');
        digitContainer.id = this.UUID;
        digitContainer.innerHTML = `
            <div class="segments-left">
                <div class="segment off" id="topleft-${this.UUID}"></div>
                <div class="segment off" id="botleft-${this.UUID}"></div>
            </div>
            <div class="segments-middle">
                <div class="segment off" id="topmid-${this.UUID}"></div>
                <div class="segment off" id="midmid-${this.UUID}"></div>
                <div class="segment off" id="botmid-${this.UUID}"></div>
            </div>
            <div class="segments-right">
                <div class="segment off" id="topright-${this.UUID}"></div>
                <div class="segment off" id="botright-${this.UUID}"></div>
            </div>
            `;

        this.topleft = document.getElementById(`topleft-${this.UUID}`);
        this.topmid = document.getElementById(`topmid-${this.UUID}`);
        this.topright = document.getElementById(`topright-${this.UUID}`);
        this.midmid = document.getElementById(`midmid-${this.UUID}`);
        this.botleft = document.getElementById(`botleft-${this.UUID}`);
        this.botmid = document.getElementById(`botmid-${this.UUID}`);
        this.botright = document.getElementById(`botright-${this.UUID}`);

        switch (content) {
            case 0:
                this.topleft.classList.add('on');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('off');
                this.botleft.classList.add('on');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case 1:
                this.topleft.classList.add('off');
                this.topmid.classList.add('off');
                this.topright.classList.add('on');
                this.midmid.classList.add('off');
                this.botleft.classList.add('off');
                this.botmid.classList.add('off');
                this.botright.classList.add('on');
                break;
            case 2:
                this.topleft.classList.add('off');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('on');
                this.botleft.classList.add('on');
                this.botmid.classList.add('on');
                this.botright.classList.add('off');
                break;
            case 3:
                this.topleft.classList.add('off');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('on');
                this.botleft.classList.add('off');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case 4:
                this.topleft.classList.add('on');
                this.topmid.classList.add('off');
                this.topright.classList.add('on');
                this.midmid.classList.add('on');
                this.botleft.classList.add('off');
                this.botmid.classList.add('off');
                this.botright.classList.add('on');
                break;
            case 5:
                this.topleft.classList.add('on');
                this.topmid.classList.add('on');
                this.topright.classList.add('off');
                this.midmid.classList.add('on');
                this.botleft.classList.add('off');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case 6:
                this.topleft.classList.add('on');
                this.topmid.classList.add('on');
                this.topright.classList.add('off');
                this.midmid.classList.add('on');
                this.botleft.classList.add('on');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case 7:
                this.topleft.classList.add('off');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('off');
                this.botleft.classList.add('off');
                this.botmid.classList.add('off');
                this.botright.classList.add('on');
                break;
            case 8:
                this.topleft.classList.add('on');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('on');
                this.botleft.classList.add('on');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case 9:
                this.topleft.classList.add('on');
                this.topmid.classList.add('on');
                this.topright.classList.add('on');
                this.midmid.classList.add('on');
                this.botleft.classList.add('off');
                this.botmid.classList.add('on');
                this.botright.classList.add('on');
                break;
            case null:
                this.topleft.classList.add('off');
                this.topmid.classList.add('off');
                this.topright.classList.add('off');
                this.midmid.classList.add('on');
                this.botleft.classList.add('off');
                this.botmid.classList.add('off');
                this.botright.classList.add('off');
                break;
        }
    }
}

let digit_display = new display;

let currentDate = new Date();

const current_hour = currentDate.getHours();
const current_minute = currentDate.getMinutes();
const current_second = currentDate.getSeconds();

if (current_hour < 9) {

    switch (current_hour) {
        case 1:
            digit_display.newDigit(0);
            digit_display.newDigit(1);
            break;
        case 2:
            digit_display.newDigit(0);
            digit_display.newDigit(2);
            break;
        case 3:
            digit_display.newDigit(0);
            digit_display.newDigit(3);
            break;
        case 4:
            digit_display.newDigit(0);
            digit_display.newDigit(4);
            break;
        case 5:
            digit_display.newDigit(0);
            digit_display.newDigit(5);
            break;
        case 6:
            digit_display.newDigit(0);
            digit_display.newDigit(6);
            break;
        case 7:
            digit_display.newDigit(0);
            digit_display.newDigit(7);
            break;
        case 8:
            digit_display.newDigit(0);
            digit_display.newDigit(8);
            break;
        case 9:
            digit_display.newDigit(0);
            digit_display.newDigit(9);
            break;

        default:
            digit_display.newDigit(null);
            break;
    }
}

if (current_hour > 9) {

    switch (current_hour) {
        case 10:
            digit_display.newDigit(1);
            digit_display.newDigit(0);
            break;
        case 11:
            digit_display.newDigit(1);
            digit_display.newDigit(1);
            break;
        case 12:
            digit_display.newDigit(1);
            digit_display.newDigit(2);
            break;
        case 13:
            digit_display.newDigit(1);
            digit_display.newDigit(3);
            break;
        case 14:
            digit_display.newDigit(1);
            digit_display.newDigit(4);
            break;
        case 15:
            digit_display.newDigit(1);
            digit_display.newDigit(5);
            break;
        case 16:
            digit_display.newDigit(1);
            digit_display.newDigit(6);
            break;
        case 17:
            digit_display.newDigit(1);
            digit_display.newDigit(7);
            break;
        case 18:
            digit_display.newDigit(1);
            digit_display.newDigit(8);
            break;
        case 19:
            digit_display.newDigit(1);
            digit_display.newDigit(9);
            break;
        case 20:
            digit_display.newDigit(2);
            digit_display.newDigit(0);
            break;
        case 21:
            digit_display.newDigit(2);
            digit_display.newDigit(1);
            break;
        case 22:
            digit_display.newDigit(2);
            digit_display.newDigit(2);
            break;
        case 23:
            digit_display.newDigit(2);
            digit_display.newDigit(2);
            break;

        default:
            digit_display.newDigit(null);
            break;
    }
}

switch (current_minute) {
    case 0:
        digit_display.newDigit(0);
        digit_display.newDigit(0);
        break;
    case 1:
        digit_display.newDigit(0);
        digit_display.newDigit(1);
        break;
    case 2:
        digit_display.newDigit(0);
        digit_display.newDigit(2);
        break;
    case 3:
        digit_display.newDigit(0);
        digit_display.newDigit(3);
        break;
    case 4:
        digit_display.newDigit(0);
        digit_display.newDigit(4);
        break;
    case 5:
        digit_display.newDigit(0);
        digit_display.newDigit(5);
        break;
    case 6:
        digit_display.newDigit(0);
        digit_display.newDigit(6);
        break;
    case 7:
        digit_display.newDigit(0);
        digit_display.newDigit(7);
        break;
    case 8:
        digit_display.newDigit(0);
        digit_display.newDigit(8);
        break;
    case 9:
        digit_display.newDigit(0);
        digit_display.newDigit(9);
        break;

    case 10:
        digit_display.newDigit(1);
        digit_display.newDigit(0);
        break;
    case 11:
        digit_display.newDigit(1);
        digit_display.newDigit(1);
        break;
    case 12:
        digit_display.newDigit(1);
        digit_display.newDigit(2);
        break;
    case 13:
        digit_display.newDigit(1);
        digit_display.newDigit(3);
        break;
    case 14:
        digit_display.newDigit(1);
        digit_display.newDigit(4);
        break;
    case 15:
        digit_display.newDigit(1);
        digit_display.newDigit(5);
        break;
    case 16:
        digit_display.newDigit(1);
        digit_display.newDigit(6);
        break;
    case 17:
        digit_display.newDigit(1);
        digit_display.newDigit(7);
        break;
    case 18:
        digit_display.newDigit(1);
        digit_display.newDigit(8);
        break;
    case 19:
        digit_display.newDigit(1);
        digit_display.newDigit(9);
        break;
    case 20:
        digit_display.newDigit(2);
        digit_display.newDigit(0);
        break;
    case 21:
        digit_display.newDigit(2);
        digit_display.newDigit(1);
        break;
    case 22:
        digit_display.newDigit(2);
        digit_display.newDigit(2);
        break;
    case 23:
        digit_display.newDigit(2);
        digit_display.newDigit(2);
        break;
    case 24:
        digit_display.newDigit(2);
        digit_display.newDigit(4);
        break;
    case 25:
        digit_display.newDigit(2);
        digit_display.newDigit(5);
        break;
    case 26:
        digit_display.newDigit(2);
        digit_display.newDigit(6);
        break;
    case 27:
        digit_display.newDigit(2);
        digit_display.newDigit(7);
        break;
    case 28:
        digit_display.newDigit(2);
        digit_display.newDigit(8);
        break;
    case 29:
        digit_display.newDigit(2);
        digit_display.newDigit(9);
        break;
    case 30:
        digit_display.newDigit(3);
        digit_display.newDigit(0);
        break;
    case 31:
        digit_display.newDigit(3);
        digit_display.newDigit(1);
        break;
    case 32:
        digit_display.newDigit(3);
        digit_display.newDigit(2);
        break;
    case 33:
        digit_display.newDigit(3);
        digit_display.newDigit(3);
        break;
    case 34:
        digit_display.newDigit(3);
        digit_display.newDigit(4);
        break;
    case 35:
        digit_display.newDigit(3);
        digit_display.newDigit(5);
        break;
    case 36:
        digit_display.newDigit(3);
        digit_display.newDigit(6);
        break;
    case 37:
        digit_display.newDigit(3);
        digit_display.newDigit(7);
        break;
    case 38:
        digit_display.newDigit(3);
        digit_display.newDigit(8);
        break;
    case 39:
        digit_display.newDigit(3);
        digit_display.newDigit(9);
        break;
    case 40:
        digit_display.newDigit(4);
        digit_display.newDigit(0);
        break;
    case 41:
        digit_display.newDigit(4);
        digit_display.newDigit(1);
        break;
    case 42:
        digit_display.newDigit(4);
        digit_display.newDigit(2);
        break;
    case 43:
        digit_display.newDigit(4);
        digit_display.newDigit(3);
        break;
    case 44:
        digit_display.newDigit(4);
        digit_display.newDigit(4);
        break;
    case 45:
        digit_display.newDigit(4);
        digit_display.newDigit(5);
        break;
    case 46:
        digit_display.newDigit(4);
        digit_display.newDigit(6);
        break;
    case 47:
        digit_display.newDigit(4);
        digit_display.newDigit(7);
        break;
    case 48:
        digit_display.newDigit(4);
        digit_display.newDigit(8);
        break;
    case 49:
        digit_display.newDigit(4);
        digit_display.newDigit(9);
        break;
    case 50:
        digit_display.newDigit(5);
        digit_display.newDigit(0);
        break;
    case 51:
        digit_display.newDigit(5);
        digit_display.newDigit(1);
        break;
    case 52:
        digit_display.newDigit(5);
        digit_display.newDigit(2);
        break;
    case 53:
        digit_display.newDigit(5);
        digit_display.newDigit(3);
        break;
    case 54:
        digit_display.newDigit(5);
        digit_display.newDigit(4);
        break;
    case 55:
        digit_display.newDigit(5);
        digit_display.newDigit(5);
        break;
    case 56:
        digit_display.newDigit(5);
        digit_display.newDigit(6);
        break;
    case 57:
        digit_display.newDigit(5);
        digit_display.newDigit(7);
        break;
    case 58:
        digit_display.newDigit(5);
        digit_display.newDigit(8);
        break;
    case 59:
        digit_display.newDigit(5);
        digit_display.newDigit(9);
        break;
    case 60:
        digit_display.newDigit(6);
        digit_display.newDigit(0);
        break;
    default:
        digit_display.newDigit(null);
        break;
}