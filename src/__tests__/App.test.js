import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import {getStaticProps} from "../pages/index.js";


describe ("getStaticProps", () => {
  it('should ', async () => {
    const res = await getStaticProps();
    expect(res.props.comics[0].id).toEqual(52598);
  });
});