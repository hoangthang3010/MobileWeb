import { toast } from 'react-toastify';
import * as Str from './../constants/String';

const options ={
    position: "top-right",
    autoClose: 2222,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const showSuccessMessage = (content) =>{
    toast.success(content, options);
}

export const showWarnMessage = (content) =>{
    toast.warn(content, options);
}

export const showInfoMessage = () =>{
    toast.info(Str.TEXT_MESSAGE_WELCOME_WEBSITE, options);
}


