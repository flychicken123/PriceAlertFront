import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet';
var perf = require('./privacy.js');
var template = { __html: perf };
const Agreement = () => {

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: white;text-align: center; padding: 20px;color: black; }'}</style>
            </Helmet>
            <span dangerouslySetInnerHTML={template} />
        </div>

    )
};

export default Agreement