import { FaTrash } from "react-icons/fa";
import {
  useCreateDestinationMutation,
  useGetDestinationsQuery,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} from "../services/destination";
import { Link } from "react-router-dom";
import defaultDestination from "../img/destination-1.jpg";
import { Button, FormGroup, FormText, Input, Label } from "reactstrap";
import Drawer from "./Modal";
import { useState } from "react";
import toast from "react-hot-toast";
const Destination = () => {
  const { data, loading, error, refetch } = useGetDestinationsQuery("");
  const [createDestination] = useCreateDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();
  const [deleteDestination] = useDeleteDestinationMutation();
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [destinationForm, setDestinationForm] = useState({
    name: "",
    description: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      const { data } = await updateDestination(destinationForm);
      if (data) {
        setDestinationForm({ name: "", description: "" });
        setModal(false);
        setIsEdit(false);
        toast.success("updated successfuly");
        refetch();
      }
    } else {
      const { data } = await createDestination({
        destination: { ...destinationForm },
      });
      if (data) {
        setDestinationForm({ name: "", description: "" });
        setModal(false);
        toast.success("Added successfuly");

        refetch();
      }
    }
  };

  const onTrashClick = async (id) => {
    const { data } = await deleteDestination({ id });
    console.log("data", data);
    if (data) {
      refetch();
      toast.success("deleted Successfully");
    }
  };

  return (
    <>
      <div className="container-fluid destination py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Destination</h5>
            <h1 className="mb-0">Popular Destinations</h1>
          </div>

          {JSON.parse(localStorage.getItem("user"))?.email ===
            "admin@example.com" && (
            <div className="d-flex justify-content-end">
              <Button
                className="  btn btn-primary   rounded-pill"
                color="primary"
                onClick={() => setModal(true)}
              >
                <span className="text-white" style={{ width: 150 }}>
                  Add Destination
                </span>
              </Button>
            </div>
          )}

          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <Link
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    All
                  </span>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {data?.map((destination) => (
                    <div className="col-lg-4">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={destination.image_url || defaultDestination}
                          alt=""
                        />
                        <div className="destination-overlay p-4">
                          {JSON.parse(localStorage.getItem("user"))?.email ===
                            "admin@example.com" && (
                            <Link
                              onClick={() => {
                                setDestinationForm({ ...destination });
                                setModal(true);
                                setIsEdit(true);
                              }}
                              className="btn btn-primary text-white rounded-pill border py-2 px-3"
                            >
                              Edit
                            </Link>
                          )}
                          <h4 className="text-white mb-2 mt-3">
                            {destination.name}
                          </h4>
                          <Link href="#" className="btn-hover text-white">
                            {destination.description}
                            <i className="fa fa-arrow-right ms-2" />
                          </Link>
                        </div>
                        <div className="search-icon">
                          {JSON.parse(localStorage.getItem("user"))?.email ===
                            "admin@example.com" && (
                            <Link
                              onClick={() => onTrashClick(destination.id)}
                              data-lightbox="destination-1"
                              className=""
                            >
                              <FaTrash
                                style={{ width: "40px", height: "40px" }}
                                className=" btn btn-white  text-danger"
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
            <h5 className="subscribe-title px-3">Subscribe</h5>
            <h1 className="text-white mb-4">Our Newsletter</h1>
            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore nam, architecto doloremque velit explicabo? Voluptate sunt
              eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
              repellat a laborum quasi.
            </p>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        modal={modal}
        title={"Add Destination"}
        toggle={() => setModal(!modal)}
        onSubmit={onSubmit}
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter a name"
            required
            value={destinationForm.name}
            onChange={(e) => {
              setDestinationForm({
                ...destinationForm,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            type="text"
            value={destinationForm.description}
            placeholder="Enter a Description"
            required
            onChange={(e) =>
              setDestinationForm({
                ...destinationForm,
                [e.target.name]: e.target.value,
              })
            }
          />
        </FormGroup>
      </Drawer>
    </>
  );
};
export default Destination;
