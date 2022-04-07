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
                <input ref={register} type="file" name="picture">Hi</input>
                <button> Submit </button>
            </form>
        </div>
    );
}

export default BitUpload;