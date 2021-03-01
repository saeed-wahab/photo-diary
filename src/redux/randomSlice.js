import {createSlice} from "@reduxjs/toolkit";

const randomSlice = createSlice({
    name:"randomPhotos",
    initialState:{
        photos:[]
    },
    reducers:{
        removePhoto:(state,id)=>{
            state.photos = state.photos.filter((_,index)=>index!==1); // underscore means ignore value
        },
        addPhotos:(state, action)=>{
            state.photos.push(...action.payload);
        }

    }


})

export const {removePhoto, addPhotos } = randomSlice.actions;

export const selectAllPhotos = state => state.randomPhotos.photos;
export const selectPhoto = (state,index) => state.randomPhotos.photos[index];

export default randomSlice.reducer;