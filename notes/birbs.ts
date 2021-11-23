// Kestrel
export const K = (a: any) => (b?: any) => a;
// Starling
export const S = (a) => (b) => (c) => a(c)(b(c));
// Idiot : a => a
export const I = S(K)(K);
// Bluebird : a => b => c => a(b(c))
export const B = S(K(S))(K);
// Cardinal : a => b => c => a(c)(b)
export const C = S(B(B)(S))(K(K));
// Trush : a => b => b(a)
export const T = C(I);
// Dove : a => b => c => d => a(b)(c(d))
export const D = B(B);
// Eagle : a => b => c => d => e => a(b)(c(d)(e))
export const E = B(B(B)(B));
// Finch : a => b => c => c(b)(a)
export const F = E(T)(T)(E)(T);
// Goldfinch : a => b => c => d => a(d)(b(c))
export const G = B(B)(C);
// Robin : a => b => c => b(c)(a)
export const R = B(B)(T);
// Mockingbird : a => a(a)
export const M = S(I)(I);
// Warbler : a => b => a(b)(b)
export const W = C(B(M)(R));
// Hummingbird :  a => b => c => a(b)(c)(b)
export const H = B(W)(B(C));
// Jay : a => b => c => d => a(b)(a(d)(c))
export const J = B(B(C))(W(B(C)(B(B(B)(B)))));
// Lark : a => b => a(b(b))
export const L = C(B)(M);
// Owl : a => b => b(a(b))
export const O = S(I);
// Queer Bird : a => b => c => b(a(c))
export const Q = C(B);
// Turing : a => b => b(a(a)(b))
export const U = L(O);
// Vireo (aka Pairing) : a => b => c => c(a)(b)
export const V = B(C)(T);

const Y = S(L(L));
// const Y = S(L)(L)
const uY = (a) => ((b) => b(b))((b) => a((c) => b(b)(c)));
const Yu = (a) => ((b) => (c) => a(b(b))(c))((b) => (c) => a(b(b))(c));
const Ye = (a) => ((b) => (c) => a(b(b))(c))((b) => (c) => a(b(b))(c));

// Blackbird : a => b => c => d => a(b(c)(d))
export const B1 = B(B)(B);
// Bunting : a => b => c => d => e => a(b(c)(d)(e))
export const B2 = B(B(B)(B))(B);
// Becard : a => b => c => d => a(b(c(d)))
export const B3 = B(B(B))(B);
// Cardinal (Once Removed) : a => b => c => d => a(b)(d)(c)
export const C_ = B(C);
// Cardinal (Twice Removed) :  a => b => c => d => e => a(b)(c)(e)(d)
export const C__ = C_;
// Dickcissel : a => b => c => d => e => a(b)(c)(d(e))
export const D1 = B(B(B));
// Dovekies : a => b => c => d => e => a(b(c))(d(e))
export const D2 = B(B)(B(B));

const uF_ = (a) => (b) => (c) => (d) => a(d)(c)(b);
const F_ = B(C)(R);

const uF__ = (a) => (b) => (c) => (d) => (e) => a(b)(e)(d)(c);
const uI_ = (a) => (b) => a(b);
const uI__ = (a) => (b) => (c) => a(b)(c);
const uM2 = (a) => (b) => a(b)(a(b));
const uQ1 = (a) => (b) => (c) => a(c(b));
const uQ2 = (a) => (b) => (c) => b(c(a));
const uQ3 = (a) => (b) => (c) => c(a(b));
const uQ4 = (a) => (b) => (c) => c(b(a));
const uR_ = (a) => (b) => (c) => (d) => a(c)(d)(b);
const uR__ = (a) => (b) => (c) => (d) => (e) => a(b)(d)(e)(c);
const uV_ = (a) => (b) => (c) => (d) => a(c)(b)(d);
const uV__ = (a) => (b) => (c) => (d) => (e) => a(b)(e)(c)(d);
const uW_ = (a) => (b) => (c) => a(b)(c)(c);
const uW__ = (a) => (b) => (c) => (d) => a(b)(c)(d)(d);
const uW1 = (a) => (b) => b(a)(a);
