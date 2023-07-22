import {plays} from "../data/plays.js";
import {invoices} from "../data/invoices.js";
import {statement} from "../statement.js";

import assert from 'assert';

const predictedResult = `청구 내역 (고객명: BigCo)
Hamlet: $650.00 (55석)
As You Like It: $580.00 (35석)
Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;

describe('statement 계산 test code', () => {
  it('성공', () => {
    assert.strictEqual(statement(invoices, plays), predictedResult);
  })
})
