import React, {Component} from "react";
import CacheRoute, {CacheSwitch} from "react-router-cache-route";
import {asyncRouter, nomatch} from "choerodon-hap-front-boot";

const PATTERN = asyncRouter(() => import('./src/main/pattern1'));

export default class RouteIndex extends Component {
    render() {
        const {match} = this.props;
        return (
            <CacheSwitch>
                <CacheRoute exact path={`${match.url}/main/code`} component={PATTERN}/>
            </CacheSwitch>
        );
    }
}
