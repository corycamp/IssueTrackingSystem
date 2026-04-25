
interface LogoProps {
    height?: number | string;
    width?: number | string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
    const { height = "h-10", width = "w-10" } = props;  
    return (
        <div className={`${height} ${width} rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg`}>
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="2" fill="white"/>
              <path d="M12 4V2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 22V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12H2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 12H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5.6 5.6L4.2 4.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.8 19.8L18.4 18.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5.6 18.4L4.2 19.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.8 4.2L18.4 5.6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
    )
};
export default Logo;