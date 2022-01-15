import React, {useState, useEffect} from 'react';

type SectionProps = {
    name : string;
    sectionTitle : string;
    fetchUrl : string;
    token : string;
}

type SectionState<DataType = any> = {
    isLoading : boolean;
    data : DataType[];
}

class DataSection extends React.Component<SectionProps, SectionState> {
    state: SectionState = {
        isLoading : true,
        data : [],
    };

    render() {
        return(
            <section className={`section section-${this.props.name}`}>

            </section>
        );
    }
}

export default DataSection