import * as cl from './birbs';

const sumXY = (x) => (y) => x + y;
const sumXYZ = (x) => (y) => (z) => x + y + z;
const sumWXYZ = (w) => (x) => (y) => (z) => w + x + y + z;
const multXY = (x) => (y) => x * y;
const add2 = sumXY(2);
const by2 = multXY(2);
const by10 = multXY(10);

const ops = {
  K: cl.K(80)('This is ignored'),
  S: cl.S(multXY)(add2)(8),
  I: cl.I(80),
  B: cl.B(by10)(add2)(6),
  C: cl.C(sumXY)(70)(10),
  T: cl.T(8)(by10),
  D: cl.D(sumXY)(10)(by10)(7),
  E: cl.E(sumXY)(10)(sumXY)(40)(30),
  F: cl.F(8)(10)(multXY),
  G: cl.G(sumXY)(by10)(7)(10),
  R: cl.R(8)(multXY)(10),
  M: cl.M((me, x, n) => 80),
  W: cl.W(sumXY)(40),
  H: cl.H(sumXYZ)(15)(50),
  J: cl.J(sumXY)(40)(30)(10),
  L: cl.L(by10)(() => 8),
  O: cl.O(() => 8)(by10),
  Q: cl.Q(by10)(by2)(4),
  U: cl.U((a) => (b) => b(0.8))(by10),
  V: cl.V(8)(10)(multXY),

  B1: cl.B1(by2)(sumXY)(20)(20),
  B2: cl.B2(by10)(sumXYZ)(1)(3)(4),
  B3: cl.B3(by10)(add2)(add2)(4),
  C_: cl.C_(sumXYZ)(5)(35)(40),
  C__: cl.C__(sumWXYZ)(3)(35)(40)(2),
  D1: cl.D1(sumXYZ)(10)(30)(by10)(4),
  D2: cl.D2(sumXY)(by10)(3)(by10)(5),
};

const getTests =
  (c) =>
  ([k, v]) =>
    test(k, () => expect(v).toEqual(c));

Object.entries(ops).forEach(getTests(80));
