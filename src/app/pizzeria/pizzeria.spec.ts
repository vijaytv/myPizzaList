import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Pizzeria } from './pizzeria';
describe('Pizzeria', () => {
  it('has name', () => {
    let pizzeria:  Pizzeria = new Pizzeria('Tony Boloney'); 
    expect(pizzeria.name).toEqual('Tony Boloney');
  });
  it('has visited default to false', () => {
    let pizzeria:  Pizzeria = new Pizzeria('Tony Boloney'); 
    expect(pizzeria.visited).toEqual(false);
  });
  
});

