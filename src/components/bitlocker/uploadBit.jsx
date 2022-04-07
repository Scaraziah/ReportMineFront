import React from "react";
import { useForm } from "react-hook-form";

function BitUpload() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div>
            <form onSubmit ={handleSubmit(onSubmit) }>
                <input {...register('picture', {required: true})} />
                <button> Submit </button>
            </form>
        </div>
    );
}

export default BitUpload;