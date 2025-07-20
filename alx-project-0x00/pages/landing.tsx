import React from "react"
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
           <h1 className=" text-xl font-extralight">Landing Page</h1>
           {/* Small Buttons */}
           <div className="mt-4 p-2 flex justify-between">
            <Button title="Small Rounded-SM" styles="text-sm rounded-sm bg-blue-500 text-white" />
            <Button title="Medium Rounded-MD" styles="text-sm rounded-md bg-green-500 text-white" />
            <Button title="Large Rounded-Full" styles="text-sm rounded-full bg-red-500 text-white" />
            </div>
           <Card />
        </div>
    )
}
export default Landing;