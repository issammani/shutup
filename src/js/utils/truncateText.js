const truncateText = (text, maxLength) => 
    text.length > maxLength ? text.trim().substr(0,maxLength - 3).replace('\n','') + '...' : text.trim();

export default truncateText;