import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_QUOTES } from '../../Gql-Operations/queries';

const Quotes = () => {
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
                <div className="container mx-auto mt-5">
                    <h1 className="text-4xl bg-purple-300 px-5 py-1 text-purple-800 capitalize font-bold mb-10">Quotes</h1>
                    {
                        data.quotes.map(quote => {
                            return (
                                <>
                                    <blockquote key={quote.by._id} className="flex border-l-4 border-purple-800 pl-3 ml-1 mt-3">
                                        <p className="text-2xl text-slate-600 capitalize font-bold">{quote.name}</p>
                                        <small className="flex justify-center items-center bg-purple-300 px-3 py-[px] rounded text-purple-800 font-semibold ml-3">{quote.by.firstName}</small>
                                    </blockquote>
                                </>
                            )
                        })
                    }
                </div>
            </>
        );
    }
};

export default Quotes;