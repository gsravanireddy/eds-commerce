/*! Copyright 2024 Adobe
All Rights Reserved. */
class n extends Error{constructor(e){super(e.map(t=>t.message).join(" ")),this.name="FetchError"}}class r extends Error{constructor(e){super(e),this.name="InvalidArgument"}}class i extends Error{constructor(e){super(e),this.name="UnexpectedError"}}class a extends r{constructor(){super("Cart ID is required")}}class c extends r{constructor(){super("Email is required")}}class o extends r{constructor(){super("Payment method code is required")}}class d extends r{constructor(){super("Shipping address is required")}}class u extends r{constructor(){super("Billing address is required")}}class l extends r{constructor(){super("Country Code is required")}}export{n as F,r as I,a as M,i as U,l as a,d as b,c,o as d,u as e};