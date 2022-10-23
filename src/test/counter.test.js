/**
 * @vitest-environment jsdom
 */

/* eslint-disable no-unused-vars */
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/counter';

// import UserProfile from '../views/User/UserProfile';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';

// const wrapper = mount(UserProfile, {
//   global: {
//     plugins: [createTestingPinia()],
//   },
// });

describe('Data Store Test', () => {
  let store = null;

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());

    // create an instance of the data store
    store = useCounterStore();
    store.count = 0;
  });

  it('increments', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it('double', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    store.increment();
    expect(counter.doubleCount).toBe(2);
    store.increment();
    store.increment();
    expect(counter.doubleCount).toBe(6);
  });
});
