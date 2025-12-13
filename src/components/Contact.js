const Contact = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Contact</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="bg-gray-200 rounded-md p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
