import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>

        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />

            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
              <option value="graphic">Graphic Design</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />

            <label htmlFor="">Upload Images</label>
            <input type="file" name="" id="" multiple />

            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your services to customers"
            ></textarea>

            <button>Create</button>
          </div>

          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g. One-page Web design"
            />

            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description to your services"
            ></textarea>

            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="number" name="" id="" min={1} />

            <label htmlFor="">Revision Numbers</label>
            <input type="number" name="" id="" min={1} />

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. Page design" />
            <input type="text" placeholder="e.g. File uploading" />
            <input type="text" placeholder="e.g. Setting up a domain" />
            <input type="text" placeholder="e.g. Hosting" />

            <label htmlFor="">Price</label>
            <input type="number" name="" id="" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
