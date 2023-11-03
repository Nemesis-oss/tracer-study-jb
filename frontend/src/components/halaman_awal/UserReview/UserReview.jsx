import React from "react";
import Reveal, { cascade } from "react-awesome-reveal";
const UserReview = () => {
  return (
    <div className="mx-36 mb-28 mt-10">
      <div className="mx-auto p-4 md:py-8 bg-gray-100 text-center sm:justify-center bg-black ">
        {/* Garis pemisah */}
        <h2 className="text-sm text-gray-400 tracking-[.25em] mt-[1em] mb-[1em] ">
          LOGIN UNTUK MENDAPATKAN GAMBARAN PENUH!
        </h2>
        <hr className="mx-auto text-center w-[60%]" />

        <div className="sm:flex sm:items-center sm:justify-center  text-center item-center">
          <label className="text-3xl font-semibold text-black text-center ">
            Testimoni Para Pengguna
          </label>
        </div>
      </div>

      <div className="grid rounded-lg border-gray-400 md:grid-cols-2 gap-4">
        {/* figure pertama */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 ">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure pertama */}

        {/* figure kedua */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Casa</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure kedua */}

        {/* figure ketiga */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Joseph McFall</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure ketiga */}

        {/* figure keempat */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Mekdi</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure keempat */}

        {/* figure pertama */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 ">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure kelima */}

        {/* figure kedua */}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white my-4 mx-4 border-2 rounded">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <p className="my-4">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum placeat dolorem exercitationem, numquam a. Ad
              iste voluptate ab. Optio veniam, aspernatur atque hic soluta rem
              facere illo voluptatum dicta."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-gray-600 text-left">
              <div>Casa</div>
            </div>
          </figcaption>
        </figure>
        {/* batas figure keenam */}
      </div>
    </div>
  );
};

export default UserReview;
