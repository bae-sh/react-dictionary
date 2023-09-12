import React, { useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".highlight{background-color:#ffa724;border-radius:6px;cursor:pointer;padding:.2rem .4rem}.active{background-color:#202732;color:#fff}.title{justify-content:space-between}.title,.title>div{align-items:center;display:flex}.title>div{gap:6px}.title>div>span{color:#fff;font-size:16px;font-style:normal;font-weight:500;letter-spacing:-.48px;line-height:130%}.description{background-color:#202732;border-radius:6px;box-sizing:border-box;display:flex;flex-direction:column;gap:13px;left:50%;padding:20px;position:fixed;top:50%;transform:translate(-50%,-50%);width:375px;z-index:1000}.content{font-size:14px;font-style:normal;letter-spacing:-.42px;line-height:150%}.close,.content{color:#fff;font-weight:400}.close{align-items:center;background-color:#595c61;border:0;border-radius:2px;cursor:pointer;display:inline-flex;font-size:12px;gap:8px;justify-content:center;padding:5px 9px}.wrapper{display:inline;position:relative}.description-img{height:145px;width:337px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUVFLHdCQUF5QixDQUN6QixpQkFBa0IsQ0FDbEIsY0FBZSxDQUhmLG1CQUlGLENBRUEsUUFDRSx3QkFBeUIsQ0FDekIsVUFDRixDQUVBLE9BRUUsNkJBRUYsQ0FDQSxrQkFGRSxrQkFBbUIsQ0FGbkIsWUFRRixDQUpBLFdBR0UsT0FDRixDQUVBLGdCQUNFLFVBQVksQ0FDWixjQUFlLENBQ2YsaUJBQWtCLENBQ2xCLGVBQWdCLENBRWhCLHFCQUF1QixDQUR2QixnQkFFRixDQUVBLGFBS0Usd0JBQXlCLENBRHpCLGlCQUFrQixDQUhsQixxQkFBc0IsQ0FNdEIsWUFBYSxDQUNiLHFCQUFzQixDQUN0QixRQUFTLENBS1QsUUFBUyxDQVhULFlBQWEsQ0FRYixjQUFlLENBRWYsT0FBUSxDQUVSLDhCQUFnQyxDQWJoQyxXQUFZLENBY1osWUFDRixDQUVBLFNBRUUsY0FBZSxDQUNmLGlCQUFrQixDQUdsQixxQkFBdUIsQ0FEdkIsZ0JBRUYsQ0FFQSxnQkFSRSxVQUFZLENBR1osZUFxQkYsQ0FoQkEsT0FJRSxrQkFBbUIsQ0FLbkIsd0JBQXlCLENBSXpCLFFBQVcsQ0FMWCxpQkFBa0IsQ0FPbEIsY0FBZSxDQWRmLG1CQUFvQixDQU1wQixjQUFlLENBRmYsT0FBUSxDQUZSLHNCQUF1QixDQUR2QixlQWNGLENBRUEsU0FHRSxjQUFlLENBRmYsaUJBR0YsQ0FFQSxpQkFFRSxZQUFhLENBRGIsV0FFRiIsImZpbGUiOiJpbmRleC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlnaGxpZ2h0IHtcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcyNDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNzMyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4udGl0bGUgPiBkaXYgPiBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMzc1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjczMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEzcHg7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDJweDtcbn1cblxuLmNsb3NlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDVweCA5cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcblxuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWM2MTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgYm9yZGVyOiAwcHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5kZXNjcmlwdGlvbi1pbWcge1xuICB3aWR0aDogMzM3cHg7XG4gIGhlaWdodDogMTQ1cHg7XG59XG4iXX0= */";
styleInject(css_248z);

function InnerComponent({ children, dictionary, clickedWord, isActivate = false, onClick, }) {
    if (!children)
        return null;
    if (!isActivate)
        return React.createElement(React.Fragment, null, children);
    const keyArr = dictionary.map((item) => item.word);
    let highlightedContent = children;
    keyArr.forEach((word) => {
        highlightedContent = highlightedContent.replace(word, match => clickedWord === word
            ? `<span class="highlight active">${match}</span>`
            : `<span class="highlight">${match}</span>`);
    });
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: highlightedContent }, onClick: onClick });
}

function BookIcon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "21", viewBox: "0 0 18 21", fill: "none" },
        React.createElement("path", { d: "M9.75 17.475V18.75H8.25V17.475H2.25C2.05109 17.475 1.86032 17.4078 1.71967 17.2883C1.57902 17.1687 1.5 17.0066 1.5 16.8375V6.6375C1.5 6.46843 1.57902 6.30628 1.71967 6.18672C1.86032 6.06717 2.05109 6 2.25 6H6.75C7.17569 5.99957 7.59659 6.07635 7.98459 6.2252C8.37259 6.37405 8.71877 6.59155 9 6.86318C9.28123 6.59155 9.62741 6.37405 10.0154 6.2252C10.4034 6.07635 10.8243 5.99957 11.25 6H15.75C15.9489 6 16.1397 6.06717 16.2803 6.18672C16.421 6.30628 16.5 6.46843 16.5 6.6375V16.8375C16.5 17.0066 16.421 17.1687 16.2803 17.2883C16.1397 17.4078 15.9489 17.475 15.75 17.475H9.75ZM15 16.2V7.275H11.25C10.8522 7.275 10.4706 7.40933 10.1893 7.64844C9.90804 7.88755 9.75 8.21185 9.75 8.55V16.2H15ZM8.25 16.2V8.55C8.25 8.21185 8.09196 7.88755 7.81066 7.64844C7.52936 7.40933 7.14782 7.275 6.75 7.275H3V16.2H8.25Z", fill: "#FFA724" }),
        React.createElement("rect", { x: "3", y: "2.25", width: "1.5", height: "3", rx: "0.75", transform: "rotate(-30 3 2.25)", fill: "#FFA724" }),
        React.createElement("rect", { width: "1.5", height: "3", rx: "0.75", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 14.7988 2.25)", fill: "#FFA724" }),
        React.createElement("rect", { x: "8.25", y: "0.75", width: "1.5", height: "3", rx: "0.75", fill: "#FFA724" })));
}

function LineIcon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "335", height: "2", viewBox: "0 0 335 2", fill: "none" },
        React.createElement("path", { d: "M0 1H335", stroke: "#595C61" })));
}

function hasJongSeong(hangeul) {
    const unicode = hangeul.charCodeAt(hangeul.length - 1);
    const hangeulStart = 0xac00;
    const hangeulEnd = 0xd7a3;
    if (unicode < hangeulStart || unicode > hangeulEnd) {
        return false;
    }
    return (unicode - hangeulStart) % 28 > 0;
}

const buttonName = {
    ko: '이해했어요 !',
    en: 'Got it !',
};
function DescriptionModal({ dictionary, clickedWord, language }) {
    if (clickedWord === '')
        return null;
    const { word, description, imgUrl } = dictionary.filter((item) => item.word === clickedWord)[0];
    const title = getTitle({ word, language });
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "description" },
            React.createElement("div", { className: "title" },
                React.createElement("div", null,
                    React.createElement(BookIcon, null),
                    React.createElement("span", null, title)),
                React.createElement("button", { className: "close" }, buttonName[language])),
            React.createElement(LineIcon, null),
            imgUrl && React.createElement("img", { src: imgUrl, alt: "image", className: "description-img" }),
            React.createElement("p", { className: "content" }, description))));
}
function getTitle({ word, language }) {
    if (language === 'ko') {
        return `${word}${hasJongSeong(word) ? '이' : '가'} 뭔가요?`;
    }
    return `What is ${word}?`;
}

function Highlighter({ dictionary, children = '', isActivate = false, language = 'en' }) {
    const [clickedWord, setClickedWord] = useState('');
    const onClickHandler = (event) => {
        const target = event.target;
        event.stopPropagation();
        if (target.className.includes('highlight')) {
            const nextWord = clickedWord === target.innerHTML ? '' : target.innerHTML;
            setClickedWord(nextWord);
        }
    };
    const closeDictionary = () => {
        setClickedWord('');
    };
    useEffect(() => {
        var _a;
        if (!document.querySelector('.close'))
            return;
        (_a = document.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeDictionary);
    }, [clickedWord]);
    return (React.createElement(React.Fragment, null,
        React.createElement(InnerComponent, { onClick: onClickHandler, dictionary: dictionary, clickedWord: clickedWord, isActivate: isActivate }, children),
        React.createElement(DescriptionModal, { clickedWord: clickedWord, dictionary: dictionary, language: language })));
}

export { Highlighter };
//# sourceMappingURL=index.js.map
