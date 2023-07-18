export default function Btn(props) {
  const { text, className, enlace, click, textclassName, children, childrenclassName } = props;

  if (enlace) {
    return (
      <a href={enlace} style={{ display: 'contents' }}>
        <button
          type="button"
          onClick={click}
          className={`${className} h-pr-fl-ma w-a noselect h-e-ghost-e t-02s h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e flexbox f-w-n-w f-f-Gilroy`}
        >
          {children && (
            <div className={`${childrenclassName} w-a h-a h-pr-fl-ma`}>{children}</div>
          )}
          <div
            className={`${textclassName} w-a h-a h-pr-fl-ma t-a-c c-white d-i-f`}
            style={{ fontSize: '15px', lineHeight: '20px' }}
          >
            {text}
          </div>
        </button>
      </a>
    );
  } else {
    return (
    
        <button
          type="button"
          onClick={click}
          className={`${className} h-pr-fl-ma w-a bg-d-t noselect h-e-ghost-e t-02s h-a p-5px h-e c-p br-r-5px b-s-b-b ns-c-f-1 c-p h-e flexbox f-w-n-w f-f-Gilroy`}
        >
          {children && (
            <div className={`${childrenclassName} w-a h-a h-pr-fl-ma`}>{children}</div>
          )}
          <div
            className={`${textclassName} w-a h-a h-pr-fl-ma t-a-c c-white d-i-f`}
           style={{ fontSize: '15px', lineHeight: '20px' }}
          >
            {text}
          </div>
        </button>
     
    );
  }
}
