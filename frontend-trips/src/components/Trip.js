import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultDestination from "../img/destination-1.jpg";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Drawer from "./Modal";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useCreateTripMutation,
  useDeleteTripMutation,
  useGetTripsQuery,
  useUpdateTripMutation,
} from "../services/trip";
import { useGetActivitiesQuery } from "../services/activity";
import { useGetDestinationsQuery } from "../services/destination";
import ActivitiesDropDown from "./ActivitiesDropDown";
const Trip = () => {
  const { data, loading, error, refetch } = useGetTripsQuery("");
  const activitiesData = useGetActivitiesQuery("");
  const destinationData = useGetDestinationsQuery("");

  const [createTrip] = useCreateTripMutation();
  const [updateTrip] = useUpdateTripMutation();
  const [deleteTrip] = useDeleteTripMutation();
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [TripForm, setTripForm] = useState({
    title: "",
    start_date: "",
    end_date: "",
    user_id: null,
    destination_id: null,
    activity_id: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'))
    if (isEdit) {
      
      const { data } = await updateTrip(TripForm);
      if (data) {
        setTripForm({ title: "",
        start_date: "",
        end_date: "",
        destination_id: null,
        activity_id: null });
        setModal(false);
        setIsEdit(false);
        toast.success("updated successfuly");
        refetch();
      }
    } else {
      const { data } = await createTrip({
        trip: { ...TripForm },
      });
      if (data) {
        setTripForm({title: "",
        start_date: "",
        end_date: "",
        destination_id: null,
        activity_id: null });
        setModal(false);
        toast.success("Added successfuly");
        refetch();
      }
    }
  };

  const onTrashClick = async (id) => {
    const { data } = await deleteTrip({ id });
    if (data) {
      refetch();
      toast.success("deleted Successfully");
    }
  };

  const dateFormat = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    return currentDate
  }

  return (
    <>
      <div className="container-fluid destination py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Trips</h5>
            <h1 className="mb-0">Popular Trips</h1>
          </div>

          { localStorage.getItem('token') &&
            <div className="d-flex justify-content-end">
            <Button
              className="  btn btn-primary   rounded-pill"
              color="primary"
              onClick={() => setModal(true)}
            >
              <span className="text-white" style={{ width: 150 }}>
                Add Trip
              </span>
            </Button>
          </div>
          }

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
                  {data?.map((trip) => (
                    <div className="col-lg-4">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={trip.image_url || defaultDestination}
                          alt=""
                        />
                        <div className="destination-overlay p-4">
                          <Link
                            onClick={() => {
                              setTripForm({ ...trip });
                              setModal(true);
                              setIsEdit(true);
                            }}
                            className="btn btn-primary text-white rounded-pill border py-2 px-3"
                          >
                            Edit
                          </Link>
                          <h4 className="text-white mb-2 mt-3">{trip.title}</h4>
                          
                          <Link href="#" className="btn-hover text-white">
                            {trip.description}
                            <i className="fa fa-arrow-right ms-2" />
                          </Link>
                          <div className="d-flex text-white w-100 justify-content-between">
                            <div>
                              <h6> Activity:</h6>
                              <h6> Destination:</h6>
                              <h6> Start Date:{trip.start_date}</h6>
                            </div>
                            <div>
                              <h6> {trip.activity.name}</h6>
                              <h6> {trip.destination.name}</h6>
                              <h6> End Date:{trip.end_date}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="search-icon">
                          <Link
                            onClick={() => onTrashClick(trip.id)}
                            data-lightbox="destination-1"
                            className=""
                          >
                            <FaTrash
                              style={{ width: "40px", height: "40px" }}
                              className=" btn btn-white  text-danger"
                            />
                          </Link>
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
        title={"Add Activity"}
        toggle={() => setModal(!modal)}
        onSubmit={onSubmit}
      >
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter a Title"
            required
            value={TripForm.title}
            onChange={(e) =>
              setTripForm({
                ...TripForm,
                [e.target.name]: e.target.value,
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="destination">Destination</Label>
          <Input
             required
            id="destination_id"
            name="destination_id"
            value={TripForm.destination_id}
            type="select"
            onChange={(e) =>
              {setTripForm({ ...TripForm, [e.target.name]: e.target.value })}
            }
          >
            <option value={-1}>Chose Destination</option>
            {destinationData?.data?.map((destination) => (
              <option value={destination.id}>{destination.name}</option>
            ))}
          </Input>
        </FormGroup>
        { TripForm.destination_id &&
          <ActivitiesDropDown setTripForm={setTripForm} TripForm={TripForm} />
        }
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
                required
                min={dateFormat()}
                id="startDate"
                name="start_date"
                type="date"
                value={TripForm.start_date}
                onChange={(e) =>
                  setTripForm({ ...TripForm, [e.target.name]: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="endDate">End Date</Label>
              <Input
                required
                min={TripForm.start_date}
                id="end_date"
                name=""
                value={TripForm.end_date}
                type="date"
                onChange={(e) =>
                  setTripForm({ ...TripForm, [e.target.id]: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
export default Trip;
