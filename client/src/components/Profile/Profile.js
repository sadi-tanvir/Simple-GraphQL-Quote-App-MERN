import React from 'react';
import { useQuery } from "@apollo/client"
import { GET_ALL_QUOTES } from "../../Gql-Operations/queries"

const Profile = () => {

    const { loading, error, data } = useQuery(GET_ALL_QUOTES)

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

    if (loading) {
        return <p>loading</p>
    } else {
        return (
            <>
                <div className="container mx-auto mt-10 bg-green-100">
                    <div className="text-center">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold">Tanvir Hossain Sadi</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </>
        );
    }
};

export default Profile;