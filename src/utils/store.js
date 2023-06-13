import create from "zustand";

export const useStore = create(set => ({
  contactOpen: false,
  openContact: () => set({contactOpen: true}),
  closeContact: () => set({contactOpen: false}),
  customContact: null,
  setCustomContact: object =>
    set(state => ({
      customContact: object,
    })),
  gatedOpen: false,
  openGated: () => set({gatedOpen: true}),
  closeGated: () => set({gatedOpen: false}),
  customGated: null,
  setCustomGated: object =>
    set(state => ({
      customGated: object,
    })),
  subOpen: false,
  openSub: () => set({subOpen: true}),
  closeSub: () => set({subOpen: false}),
  customSub: null,
  setCustomSub: object =>
    set(state => ({
      customSub: object,
    })),
  fbFleetsize: 150,
  setFbFleetsize: val =>
    set(state => ({
      fbFleetsize: val,
    })),
  fbElectricGoal: 100,
  setFbElectricGoal: val =>
    set(state => ({
      fbElectricGoal: val,
    })),
  fbDeployments: 2,
  setFbDeployments: val =>
    set(state => ({
      fbDeployments: val,
    })),
  fbServiceYears: 5,
  setFbServiceYears: val =>
    set(state => ({
      fbServiceYears: val,
    })),
  fbState: null,
  setFbState: val =>
    set(state => ({
      fbState: val,
    })),
  fbScrollingForwards: true,
  setFbScrollingForwards: val =>
    set(state => ({
      fbScrollingForwards: val,
    })),
}));
